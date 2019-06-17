import { Component, OnInit } from '@angular/core';
import { QuestionService } from 'src/app/core/services/question.service';
import { OptionService } from 'src/app/core/services/option.service';
import { QuizService } from 'src/app/core/services/quiz.service';
import { ActivatedRoute } from '@angular/router';
import { Quiz } from 'src/app/core/models/Quiz.model';
import { UserQuizState } from 'src/app/core/models/UserQuizState.model';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {

  quizId: string;
  quiz: Quiz;

  constructor(
    private route: ActivatedRoute,
    private quizSvc: QuizService,
    private userQuizState: UserQuizState,
    private questionSvc: QuestionService,
    private optionSvc: OptionService,
  ) { }

  ngOnInit() {
  }

  async fetchQuiz() {
    this.quizId = this.route.snapshot.paramMap.get('id');
    this.quiz = await this.quizSvc.fetchQuizById(this.quizId);
  }

}
