import mongoose from "mongoose";

const userModel = new mongoose.Schema({
  eployer_name: {
    type: String,
    require: true,
  },

  employer_logo: {
    type: String,
    require: true,
  },
  employer_company_type: {
    type: String,
    require: true,
  },
  employer_website: {
    type: String,
    require: true,
  },
  job_title: {
    type: String,
    require: true,
  },
  job_description: {
    type: String,
    require: true,
  },
  job_is_remote: {
    type: Boolean,
    require: true,
  },
  job_posted_at_timestamp: {
    type: String,
    require: true,
  },
  job_state: {
    type: String,
    require: true,
  },
  job_country: {
    type: String,
    require: true,
  },
  job_address: {
    type: String,
    require: true,
  },
  job_year_experience: {
    type: String,
    require: true,
  },
  job_required_education: {
    type: String,
    require: true,
  },
  job_salary_currency: {
    type: String,
    require: true,
  },
  job_salary_price: {
    type: String,
    require: true,
  },

  //   orders: [
  //     {
  //       type: mongoose.Schema.Types.ObjectId,
  //       ref: "Order",
  //       required: true,
  //     },
  //   ],
});

const Jobs = mongoose.model("Jobs", userModel);
export default Jobs;
