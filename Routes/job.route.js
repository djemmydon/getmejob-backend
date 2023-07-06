import express from "express";
import { createJob, getAllJob } from "../Controller/Job.controller.js";

const router = express.Router();

router.route("/").post(createJob);
router.route("/").get(getAllJob);

export default router;
