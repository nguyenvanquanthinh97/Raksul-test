import mongoose from "mongoose";

interface ModelAttrs {
  name: string;
}

interface ModelDoc extends mongoose.Document {
  name: string;
}

interface ModelModel extends mongoose.Model<ModelDoc> {
  build(attrs: ModelAttrs): ModelDoc;
}

const modelSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
  },
  {
    toJSON: {
      transform(doc, ret) {
        ret.id = ret._id;
        delete ret._id;
        delete ret.__v;
      },
    },
  }
);

modelSchema.statics.build = (attrs: ModelAttrs) => {
  return new Model(attrs);
};

const Model = mongoose.model<ModelDoc, ModelModel>("Model", modelSchema);

export { Model };
