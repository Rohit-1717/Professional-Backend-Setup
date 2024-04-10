const asyncHandler = (requestHandler) => {
  (req, res, next) => {
    Promise.resolve(requestHandler(req, res, next)).catch((err) => next);
  };
};
th
export { asyncHandler };

// Try catch Method
/*
const asyncHandler = (fn) => async (req, res, next) => {
  try {
    await fn(req, res, next);
  } catch (error) {
    res.status(err.code || 500).json({
      success: false,
      message: error.message,
    });
  }
}; */