(
SynthDef.new(\pulseBurst, {
	arg freq = 220, amp = 1, pan = 0, dur = 1, cutoff = 1000, resonance = 0;
	var mod, sig, pannedSig, env;
	env = Line.kr(1, 0, dur: dur, doneAction: 2);
	sig = (BLowPass.ar(Pulse.ar(freq), freq: cutoff, rq: 1.0 - resonance) * amp) * env;
	pannedSig = Pan2.ar(sig, pan);
	Out.ar(0, pannedSig);
}).add;
)

z = Synth.new(\pulseBurst, [\freq, exprand(200,800), \cutoff, 400, \resonance, 0.4, \dur, 0.5]);