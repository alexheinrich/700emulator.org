#ifndef SIN
#define SIN

class Sin {
    public:
        Sin();
        double next();

    private:
        double twopi = 6.28;
        double twopiovrsr = 0.0001424036281;
        double curfreq = 440.0;
        double curphase = 0.0;
        double incr = curfreq * twopiovrsr;
};

#endif
