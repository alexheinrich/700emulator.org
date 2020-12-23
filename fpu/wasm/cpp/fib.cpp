#include "fib.h"
#include <cstdlib> 


Fib::Fib() {
}

double Fib::next() {
	curphase += incr;

	if (curphase >= twopi) {
		curphase -= twopi;
	}

	if (curphase < 0.0) {
		curphase += twopi;
	}
  
  return curphase;
  return (((double) rand() / (RAND_MAX)) * 2.0) - 1.0;
}
