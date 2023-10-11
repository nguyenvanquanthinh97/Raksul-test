import express, { Request, Response } from "express";
import { body } from "express-validator";
import {
  validateRequest,
  BadRequestError,
} from "@thinhvqnguyen-tickets/common";

import { Model } from "../models/model";

const router = express.Router();

router.post(
  "/",
  [body("name").not().isEmpty()],
  validateRequest,
  async (req: Request, res: Response) => {
    const { name } = req.body;

    const existingModel = await Model.findOne({ name: name });

    if (existingModel) {
      throw new BadRequestError(`Model ${name} already exists`);
    }

    const model = Model.build({
      name,
    });

    await model.save();

    res.status(201).send(model);
  }
);

export { router as createModel };
