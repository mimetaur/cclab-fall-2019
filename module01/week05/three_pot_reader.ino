// 3 Pot Reader
// Read 3 analog inputs

const int potOne = A0;
const int potTwo = A1;
const int potThree = A2;

int potOneValue = 0;
int potTwoValue = 0;
int potThreeValue = 0;

void setup() {
  Serial.begin(9600);
}

void loop() {
  
  potOneValue = analogRead(potOne);
  potTwoValue = analogRead(potTwo);
  potThreeValue = analogRead(potThree);
  
  Serial.print(potOneValue);
  Serial.print(",");
  Serial.print(potTwoValue);
  Serial.print(",");
  Serial.println(potThreeValue);

  delay(200);
}
