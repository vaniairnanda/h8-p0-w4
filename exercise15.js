function highestScore (students) {
    // Code disini
    var result = {}

    if (students.length === 0) {
      return result;
    }
    for (var i = 0; i < students.length; i++) {
      if (result[students[i].class] === undefined) {
        result[students[i].class] = {
          name : '',
          score : 0,
        }
      }
      for (var j = 0; j < students.length; j++) {
        if (students[j].class == students[i].class) {
          if (students[j].score > result[students[i].class].score) {
            result[students[i].class].score = students[j].score
            result[students[i].class].name = students[j].name 
          }
        }
       
      }
      
    }
    return result
}
  
  // TEST CASE
  console.log(highestScore([
    {
      name: 'Dimitri',
      score: 90,
      class: 'foxes'
    },
    {
      name: 'Alexei',
      score: 85,
      class: 'wolves'
    },
    {
      name: 'Sergei',
      score: 74,
      class: 'foxes'
    },
    {
      name: 'Anastasia',
      score: 78,
      class: 'wolves'
    }
  ]));
  
  // {
  //   foxes: { name: 'Dimitri', score: 90 },
  //   wolves: { name: 'Alexei', score: 85 }
  // }
  
  
  console.log(highestScore([
    {
      name: 'Alexander',
      score: 100,
      class: 'foxes'
    },
    {
      name: 'Alisa',
      score: 76,
      class: 'wolves'
    },
    {
      name: 'Vladimir',
      score: 92,
      class: 'foxes'
    },
    {
      name: 'Albert',
      score: 71,
      class: 'wolves'
    },
    {
      name: 'Viktor',
      score: 80,
      class: 'tigers'
    }
  ]));
  
  // {
  //   foxes: { name: 'Alexander', score: 100 },
  //   wolves: { name: 'Alisa', score: 76 },
  //   tigers: { name: 'Viktor', score: 80 }
  // }
  
  
  console.log(highestScore([])); //{}