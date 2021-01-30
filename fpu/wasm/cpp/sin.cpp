#include "sin.h"
#include <cstdlib> 


Sin::Sin() {
}

double Sin::next() {
	curphase += incr;

	if (curphase >= twopi) {
		curphase -= twopi;
	}

	if (curphase < 0.0) {
		curphase += twopi;
	}
  
  return curphase;
}
