const jobFilter = {
  sortBy: {
    label: "Sort By",
    options: [
      { label: "Newest", value: "-createdAt" },
      { label: "Oldest", value: "createdAt" },
      { label: "Salary (Low -> High)", value: "salary" },
      { label: "Salary (High -> Low)", value: "-salary" },
    ],
  },
  limit: {
    label: "Show",
    options: [
      { label: "20", value: "20" },
      { label: "25", value: "25" },
      { label: "50", value: "50" },
      { label: "100", value: "100" },
    ],
  },
  search: {
    label: "Search By Keywords",
    placeholder: "Job title, category",
  },
  category: {
    label: "Category",
    name: "category",
    placeholder: "Choose a category",
    options: [
      {
        label: "Web Development",
        value: "web development",
      },
      {
        label: "App Development",
        value: "app development",
      },
      {
        label: "Machine Learning",
        value: "machine learning",
      },
      {
        label: "Wordpress Development",
        value: "wordpress development",
      },
    ],
  },
  type: {
    label: "Job Type",
    name: "type",
    options: [
      {
        label: "Full Time",
        value: "fullTime",
      },
      {
        label: "Part Time",
        value: "partTime",
      },
      {
        label: "Contract",
        value: "contract",
      },
      {
        label: "Internship",
        value: "internship",
      },
      {
        label: "Freelance",
        value: "freelance",
      },
    ],
  },
  location: {
    label: "Location",
    name: "location",
    options: [
      {
        label: "Remote",
        value: "remote",
      },
      {
        label: "Onsite",
        value: "onsite",
      },
      {
        label: "Hybrid",
        value: "hybrid",
      },
    ],
  },
  experience: {
    label: "Experience",
    name: "experience",
    options: [
      {
        label: "Fresher",
        value: "0",
      },
      {
        label: "1 Year",
        value: "1",
      },
      {
        label: "2 Years",
        value: "2",
      },
      {
        label: "3 Years",
        value: "3",
      },
      {
        label: "4 Years",
        value: "4",
      },
      {
        label: "5 Or ++",
        value: "5",
      },
    ],
  },
};

export const config = { jobFilter };
