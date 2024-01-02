import mongoose from "mongoose";

const orderItemSchema = new mongoose.Schema({
  productId: { type: mongoose.Schema.Types.ObjectId, ref: "Product" },
  quantity: { type: Number, required: true },
});

const orderSchema = new mongoose.Schema(
  {
    orderedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: tue,
    },
    orderValue: {
      type: Number,
      required: true,
    },
    items: [orderItemSchema],
    address: { type: String, required: true },
    status: {
      type: String,
      default: "pending",
      enum: ["pending", "delivered", "cancelled"],
    },
  },
  { timestamps: true }
);

export const Order = mongoose.model("Order", orderSchema);
