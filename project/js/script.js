function calculateResult() {
    var score = 0;
    var totalQuestions = 4;
    
    // Définir les bonnes réponses
    var correctAnswers = {
      q1: 'a', // Bleu
      q2: 'b', // Sortir avec des amis
      q3: 'c', // Électronique
      q4: 'b'  // Travailler sur des projets personnels
    };
  
    // Vérifier chaque réponse
    for (var i = 1; i <= totalQuestions; i++) {
      var question = document.querySelector(`input[name="q${i}"]:checked`);
      if (question && question.value === correctAnswers[`q${i}`]) {
        score++;
      }
    }
  
    // Calculer le pourcentage de bonnes réponses
    var percentage = (score / totalQuestions) * 100;
  
    // Afficher le résultat
    var resultText = `Vous avez répondu correctement à ${score} sur ${totalQuestions} questions.`;
    resultText += `<br>Votre score est de ${percentage}%`;
  
    var resultElement = document.getElementById("result");
    resultElement.innerHTML = resultText;
  }
  