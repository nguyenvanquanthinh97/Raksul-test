import mongoose from "mongoose";

interface SmartphoneAttrs {
  manufacturerId: string;
  modelId: string;
  dataMemory: string;
  manufacturerYear: string;
  OSVersion: string;
  bodyColor: string;
  price: number;
}

interface SmartphoneDoc extends mongoose.Document {
  manufacturerId: string;
  modelId: string;
  dataMemory: string;
  manufacturerYear: string;
  OSVersion: string;
  bodyColor: string;
  price: number;
}

interface SmartphoneModel extends mongoose.Model<SmartphoneDoc> {
  build(attrs: SmartphoneAttrs): SmartphoneDoc;
}

const smartphoneSchema = new mongoose.Schema(
  {
    manufacturerId: {
      type: String,
      required: true,
    },
    modelId: {
      type: String,
      required: true,
    },
    dataMemory: {
      type: String,
      required: true,
    },
    manufactureYear: {
      type: String,
      required: true,
    },
    OSVersion: {
      type: String,
      required: true,
    },
    bodyColor: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
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

smartphoneSchema.statics.build = (attrs: SmartphoneAttrs) => {
  return new Smartphone(attrs);
};

const Smartphone = mongoose.model<SmartphoneDoc, SmartphoneModel>(
  "Smartphone",
  smartphoneSchema
);

export { Smartphone };
