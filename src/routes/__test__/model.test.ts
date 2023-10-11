import request from "supertest";

import { app } from "../../app";
import { Model } from "../../models/model";

it("returns 400 for missing body data", async () => {
  await request(app).post("/api/models").send({}).expect(400);
});

it("returns 201 when adding model successfully", async () => {
  const response = await request(app)
    .post("/api/models")
    .send({
      name: "Iphone",
    })
    .expect(201);

  const model = await Model.findById(response.body.id);
  expect(model).toBeDefined();
});
