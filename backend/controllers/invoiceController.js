const Invoice = require("../models/Invoice");

// @desc    Create new invoice
// @route   POST /api/invoices
// @access  Private
exports.createInvoice = async (req, res) => {
  try {
    const user = req.user;
    const {
      invoiceNumber,
      invoiceDate,
      dueDate,
      billFrom,
      billTo,
      items,
      notes,
      paymentTerms,
    } = req.body;
    

    // subtotal calculation
    let subtotal = 0;
    let taxTotal = 0;
    items.forEach((item) => {
      subtotal += item.unitPrice * item.quantity;
      taxTotal += ((item.unitPrice * item.quantity) * (item.taxPercent || 0)) / 100;
    });

    const total = subtotal + taxTotal;

    const invoice = new Invoice({
      user,
      invoiceNumber,
      invoiceDate,
      dueDate,
      billFrom,
      billTo,
      items,
      notes,
      paymentTerms,
      subtotal,
      taxTotal,
      total,
    });

    await invoice.save();
    res.status(201).json(invoice);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error creating invoice", error: error.message });
  }
};

// @desc    Get all invoices of logged-in user
// @route   GET /api/invoices
// @access  Private
exports.getInvoices = async (req, res) => {
  try {
    const invoices = await Invoice.find({user: req.user.id}).populate("user", "name email");
    res.json(invoices);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error fetching invoice", error: error.message });
  }
};

// @desc    Get single invoice by ID
// @route   GET /api/invoices/:id
// @access  Private
exports.getInvoiceById = async (req, res) => {
  try {
    const invoice = await Invoice.findById(req.params.id).populate("user", "name email");
    if (!invoice) return res.status(404).json({ message: "Invoice not found" });

    // Check if the invoice belongs to the user
    if (invoice.user._id.toString() !== req.user.id) {
      return res.status(401).json({ message: "Not authorized" });
    }

    res.json(invoice);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error fetching invoice", error: error.message });
  }
};