#include "sin.h"
#include <vector>
#include <emscripten.h>

extern "C" {
	double new_fib();
	double next_val(int sin_instance);
}

auto instances = std::vector<Sin>();

EMSCRIPTEN_KEEPALIVE double next_val(int sin_instance)
{
	return instances[sin_instance].next();
}

EMSCRIPTEN_KEEPALIVE double new_sin() {
  instances.push_back(Sin());
  return instances.size() - 1;
}

int main() {
  return 0;
}
