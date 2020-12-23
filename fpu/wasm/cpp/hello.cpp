#include "fib.h"
#include <vector>
#include <emscripten.h>

extern "C" {
	double new_fib();
	double next_val(int fib_instance);
}

auto instances = std::vector<Fib>();

EMSCRIPTEN_KEEPALIVE double next_val(int fib_instance)
{
	return instances[fib_instance].next();
}

EMSCRIPTEN_KEEPALIVE double new_fib() {
  instances.push_back(Fib());
  return instances.size() - 1;
}

int main() {
  return 0;
}
