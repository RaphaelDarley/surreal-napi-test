extern crate napi_build;

fn main() {
  let target = std::env::var("TARGET").unwrap();

  if target == "x86_64-pc-windows-msvc"
    || target == "x86_64-unknown-linux-gnu"
    || target == "aarch64-linux-android"
    || target == "armv7-linux-androideabi"
  {
    println!("cargo:rustc-cfg=rocksdb");
  }

  napi_build::setup();
}
