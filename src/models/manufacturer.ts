import mongoose from "mongoose";

interface ManufacturerAttrs {
  name: string;
}

interface ManufacturerDoc extends mongoose.Document {
  name: string;
}

interface ManufacturerModel extends mongoose.Model<ManufacturerDoc> {
  build(attrs: ManufacturerAttrs): ManufacturerDoc;
}

const manufacturerSchema = new mongoose.Schema(
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

manufacturerSchema.statics.build = (attrs: ManufacturerAttrs) => {
  return new Manufacturer(attrs);
};

const Manufacturer = mongoose.model<ManufacturerDoc, ManufacturerModel>(
  "Manufacturer",
  manufacturerSchema
);

export { Manufacturer };
