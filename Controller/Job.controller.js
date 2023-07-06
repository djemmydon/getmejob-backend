import Order from "../Model/order.schema.js";
import nodemailer from "nodemailer";
import path from "path";
import hbs from "nodemailer-express-handlebars";
import Jobs from "../Model/job.schema.js";
export const createJob = async (req, res) => {
  const {
    eployer_name,
    employer_logo,
    employer_company_type,
    employer_website,
    job_title,
    job_description,
    job_is_remote,
    job_posted_at_timestamp,
    job_state,
    job_country,
    job_address,
    job_year_experience,
    job_required_education,
    job_salary_currency,
    job_salary_price,
  } = req.body;

  try {
    // if (!orderUser) throw new Error("User not found")

    // orderUser.orders.push(newOrder._id);
    const newJob = new Jobs({
      eployer_name,
      employer_logo,
      employer_company_type,
      employer_website,
      job_title,
      job_description,
      job_is_remote,
      job_posted_at_timestamp,
      job_state,
      job_country,
      job_address,
      job_year_experience,
      job_required_education,
      job_salary_currency,
      job_salary_price,
    });

    const savedUser = await newJob.save();

    res.status(201).json(savedUser);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getOneOrder = async (req, res) => {
  const { id } = req.params;
  try {
    const product = await Order.findOne({ _id: id });

    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getAllJob = async (req, res) => {
  try {
    const jobs = await Jobs.find({});

    res.status(200).json(jobs);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
export const updateeOrder = (req, res) => {};
