rm -rf build/ 
mkdir build
cd build
em++ ../cpp/hello.cpp ../cpp/fib.cpp -s WASM=1 -s BINARYEN_ASYNC_COMPILATION=0 -s SINGLE_FILE=1 --post-js ../lib/em-es6-module.js -o hello.js|| exit 1
mv hello.js ../gen/
# mv hello.wasm ../gen/