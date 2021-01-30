#ifndef SIN
#define SIN

#define SAMPLING_RATE 44100
#define PI 3.14159265
#define TWOPI PI * 2

class Sin {
    public:
        Sin(double freq = 440.0);
        double next();

    private:
        double twopi = TWOPI;
        double twopiovrsr = TWOPI / SAMPLING_RATE;
        double curphase = 0.0;
        double curfreq;
        double incr;
};

#endif
