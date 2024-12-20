import EErrors from "../../services/errors/enums.js";
export default (error, req, res, next) => {
    console.log(error)
    switch (error.code) {
        case EErrors.INVALID_TYPES_ERROR:
            res.send({ status: "error", error: error.name })
            break
        default:
            res.send({ status: "error", error: "Error no manejado" })
    }
}