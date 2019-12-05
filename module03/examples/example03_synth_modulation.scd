(
y = {
	arg freq = 330, modRate = 8, modAmount = 1, amp = 1;
	var freqMod, sig;
	freqMod = SinOsc.kr(modRate);
	sig = SinOsc.ar(freq * freqMod * modAmount) * amp;
}.play;
)

y.set(\modRate, 0.5)
y.set(\modAmount, 0.5)
y.free;