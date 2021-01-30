#include "sin.h"
#include <cstdlib> 


Sin::Sin(double freq) {
	curfreq = freq;
	incr = curfreq * twopiovrsr;
}

double Sin::next() {
	curphase += incr;

	if (curphase >= twopi) {
		curphase -= twopi;
	}

	if (curphase < 0.0) {
		curphase += twopi;
	}
  
  return sin(curphase);
}
