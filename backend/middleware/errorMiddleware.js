const notFound = (req, res, next) => {
  const error = new Error(`Not Found: ${req.originalUrl}`);
  res.status(404);
  next(error);
};

const errorHandler = (error, req, res, next) => {
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  const message = error.message;

  if (error.name === "CastError" && error.kind === "ObjectId") {
    res.status(404).json({ message: "Resource not found" });
  } else {
    res.status(statusCode).json({
      message,
      stack: error.stack,
    });
  }
};

export { notFound, errorHandler };
