export const ctrlWrapper = (controller) => {
    return async (req, res, next) => {
      try {
        await controller(req, res, next);
      } catch (err) {
        next(err);
      }
    };
  };



  import createHttpErrors from 'http-errors';

  export function validateBody(schema) {
    return (req, res, next) => {
      const result = schema.validate(req.body, { abortEarly: false });

      if (typeof result.error !== 'undefined') {
        console.log(result.error.details);

        return next(
          createHttpErrors(
            400,
            result.error.details.map((err) => err.message).join('---'),
          ),
        );
      }

      next();
    };
  }
