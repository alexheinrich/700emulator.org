#include "sin.h"
#include <vector>
#include <emscripten.h>

extern "C" {
	double new_sin(double freq);
	double next_val(int sin_instance);
}

auto instances = std::vector<Sin>();

EMSCRIPTEN_KEEPALIVE double next_val(int sin_instance)
{
	return instances[sin_instance].next();
}

EMSCRIPTEN_KEEPALIVE double new_sin(double freq = 440.0) {
  instances.push_back(Sin(freq));
  return instances.size() - 1;
}

int main() {
  return 0;
}
