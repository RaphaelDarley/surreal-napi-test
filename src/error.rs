pub struct Error(String);

impl From<Error> for napi::Error {
    fn from(Error(value): Error) -> Self {
        Self::from_reason(value)
    }
}

impl From<surrealdb::Error> for Error {
    fn from(value: surrealdb::Error) -> Self {
        Self(value.to_string())
    }
}

// pub fn sdb_err_map(err: surrealdb::Error) -> napi::Error {
//     napi::Error::from_reason(err.to_string())
// }

pub fn err_map(err: impl std::error::Error) -> napi::Error {
    napi::Error::from_reason(err.to_string())
}
