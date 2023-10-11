import express, { Request, Response } from "express";
import { body } from "express-validator";
import {
  validateRequest,
  BadRequestError,
} from "@thinhvqnguyen-tickets/common";

import { Manufacturer } from "../models/manufacturer";

const router = express.Router();

router.post(
  "/",
  [body("name").not().isEmpty()],
  validateRequest,
  async (req: Request, res: Response) => {
    const { name } = req.body;

    const existingManufacturer = await Manufacturer.findOne({
      name: name,
    });

    if (existingManufacturer) {
      throw new BadRequestError(`existingManufacturer ${name} already exists`);
    }

    const manufacturer = Manufacturer.build({
      name,
    });

    await manufacturer.save();

    res.status(201).send(manufacturer);
  }
);

export { router as createManufacturer };
