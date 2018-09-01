using System;
using System.Collections.Generic;
using System.Linq;

namespace BlazorQuiz.Models {
    public class Quiz {
        List<Quiz> quizes;

        public string Question { get; set; }
        public List<string> Answers { get; set; }
        public int IndexCorrectAnswer { get; set; }
    }
}