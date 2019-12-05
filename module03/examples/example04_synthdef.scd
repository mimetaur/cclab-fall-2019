(
SynthDef.new(\sineDrone, {
	arg freq = 330, modRate = 2, modAmount = 1, amp = 1, pan = 0;
	var mod, sig, pannedSig;
	mod = SinOsc.kr(modRate) * modAmount;
	sig = SinOsc.ar(freq * mod) * amp;
	pannedSig = Pan2.ar(sig, pan);
	Out.ar(0, pannedSig);
}).add;
)

z = Synth.new(\sineDrone, [\modRate, 1, \modAmount, 0.5, \pan, 0]);
z.free;