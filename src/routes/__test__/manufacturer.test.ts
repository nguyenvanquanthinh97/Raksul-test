import request from "supertest";

import { app } from "../../app";
import { Manufacturer } from "../../models/manufacturer";

it("returns 400 for missing body data", async () => {
  await request(app).post("/api/manufacturers").send({}).expect(400);
});

it("returns 201 when adding model successfully", async () => {
  const response = await request(app)
    .post("/api/manufacturers")
    .send({
      name: "Apple",
    })
    .expect(201);

  const model = await Manufacturer.findById(response.body.id);
  expect(model).toBeDefined();
});
