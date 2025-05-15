import mongoos from "mongoose";

const categorySchema = new mongoos.Schema({
  name: {
    type: String,
    required: true,
    uqiue: true,
  },
  slug: {
    type: String,
    lowercase: true,
  },
});

export default mongoos.model("Category", categorySchema);
