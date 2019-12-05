(
z = {
	arg freq = 440, amp = 1;
	var sig;
	sig = SinOsc.ar(freq) * amp;
}.play;
)

z.set(\freq, 220)
z.set(\amp, 0.5)
z.free;
