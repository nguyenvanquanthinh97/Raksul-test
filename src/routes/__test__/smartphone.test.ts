import request from "supertest";

import { app } from "../../app";
import { Manufacturer } from "../../models/manufacturer";
import { Model } from "../../models/model";
import { Smartphone } from "../../models/smartphone";

it("returns 400 for missing body data", async () => {
  const response = await request(app)
    .post("/api/smartphones")
    .send({})
    .expect(400);
});

it("returns 400 when passing not existed manufacturer, model", async () => {
  await request(app)
    .post("/api/smartphones")
    .send({
      manufacturerName: "Iphone",
      modelName: "iphone for iSheep",
      dataMemory: "128GB",
      manufactureYear: "2023",
      OSVersion: "v19.0",
      bodyColor: "black",
      price: 1000,
    })
    .expect(400);
});

it("returns 201 when adding smartphone to inventory successfully", async () => {
  const manufacture = Manufacturer.build({
    name: "Iphone",
  });

  await manufacture.save();

  const model = Model.build({
    name: "iphone for iSheep",
  });

  await model.save();

  const response = await request(app)
    .post("/api/smartphones")
    .send({
      manufacturerName: manufacture.name,
      modelName: model.name,
      dataMemory: "128GB",
      manufactureYear: 2023,
      OSVersion: "v19.0",
      bodyColor: "black",
      price: 1000,
    })
    .expect(201);

  const smartphone = await Smartphone.findById(response.body.id);
  expect(smartphone).toBeDefined();
});
