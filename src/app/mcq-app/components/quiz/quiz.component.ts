import { Component, OnInit } from '@angular/core';
import { QuizService } from 'src/app/core/services/quiz.service';
import { ActivatedRoute } from '@angular/router';
import { Quiz } from 'src/app/core/models/Quiz.model';
import { UserQuizService } from 'src/app/core/services/user-quiz.service';
import { UserQuiz } from 'src/app/core/models/UserQuiz.model';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {

  quizId: string;
  quiz: Quiz;
  userQuiz: UserQuiz;

  constructor(
    private route: ActivatedRoute,
    private quizSvc: QuizService,
    private userQuizSvc: UserQuizService,
  ) {
    this.fetchQuiz();
  }

  ngOnInit() {
  }

  async fetchQuiz() {
    this.quizId = this.route.snapshot.paramMap.get('id');
    // For Quiz Name and Description
    this.quiz = await this.quizSvc.fetchQuizById(this.quizId);
  }

  async startQuiz() {
    const item = new UserQuiz();
    item.quizId = this.quizId;
    this.userQuiz = await this.userQuizSvc.createUserQuiz(item);
  }

  async saveUserQuiz() {}

}
