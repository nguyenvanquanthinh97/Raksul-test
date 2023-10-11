import express, { Request, Response } from "express";
import { body } from "express-validator";
import {
  validateRequest,
  BadRequestError,
} from "@thinhvqnguyen-tickets/common";

import { Manufacturer } from "../models/manufacturer";
import { Model } from "../models/model";
import { Smartphone } from "../models/smartphone";

const router = express.Router();

router.post(
  "/",
  [
    body("manufacturerName").not().isEmpty(),
    body("modelName").not().isEmpty(),
    body("dataMemory").not().isEmpty(),
    body("manufactureYear").not().isEmpty(),
    body("OSVersion").not().isEmpty(),
    body("bodyColor").not().isEmpty(),
    body("price").not().isEmpty(),
  ],
  validateRequest,
  async (req: Request, res: Response) => {
    const {
      manufacturerName,
      modelName,
      dataMemory,
      manufactureYear,
      OSVersion,
      bodyColor,
      price,
    } = req.body;

    const manufacturer = await Manufacturer.findOne({ name: manufacturerName });

    if (!manufacturer) {
      throw new BadRequestError(
        `Manufacturer ${manufacturerName} does not exist`
      );
    }

    const model = await Model.findOne({ name: modelName });

    if (!model) {
      throw new BadRequestError(`Model ${modelName} does not exist`);
    }

    const phone = new Smartphone({
      manufacturerId: manufacturer.id,
      modelId: model.id,
      dataMemory,
      manufactureYear,
      OSVersion,
      bodyColor,
      price,
    });

    await phone.save();

    res.status(201).send(phone);
  }
);

export { router as createSmartphone };
