import { Component, OnInit } from '@angular/core';
import { TopicService } from 'src/app/core/services/topic.service';
import { Topic } from 'src/app/core/models/Topic.model';
import { Router, ActivatedRoute } from '@angular/router';
import { QuizService } from 'src/app/core/services/quiz.service';
import { Quiz } from 'src/app/core/models/Quiz.model';

@Component({
  selector: 'app-topic-list',
  templateUrl: './topic-list.component.html',
  styleUrls: ['./topic-list.component.css']
})
export class TopicListComponent implements OnInit {

  courseId: string;
  get isAnyUnSelected(): boolean {
    if (!Array.isArray(this.topicList)) { return true; }
    return this.topicList.some(topic => !topic.isSelected);
  }
  selectedTopics: Topic[];
  selectAction: 'view' | 'edit' | 'delete' | 'create';

  topicList: Topic[];

  constructor(
    private topicSvc: TopicService,
    private quizSvc: QuizService,
    private router: Router,
    private route: ActivatedRoute,
  ) {}

  ngOnInit() {
    this.courseId = this.route.snapshot.queryParamMap.get('courseId');
    this.fetchTopics();
  }

  async fetchTopics(): Promise<void> {
    try {
      const res: Topic[] = await this.topicSvc.fetchTopicsByCourseId(this.courseId);
      if (!Array.isArray(res)) { throw res; }
      this.topicList = res || [];
    } catch (error) {
      console.log(error);
    }
  }

  selectAll() {
    if (!Array.isArray(this.topicList)) { return; }
    this.topicList.forEach(topic => topic.isSelected = true);
  }

  unselectAll() {
    if (!Array.isArray(this.topicList)) { return; }
    this.topicList.forEach(topic => topic.isSelected = false);
  }

  async createQuiz(quiz: Quiz) {
    quiz = await this.quizSvc.createQuiz(quiz);
    this.router.navigate([`/quizzes/${quiz._id}`]);
  }

  showQuizAddModal() {
    this.selectedTopics = this.topicList.filter(topic => topic.isSelected);
    this.selectAction = 'create';
  }

  onModalConfirmed(item: Quiz) {
    try {
      switch (this.selectAction) {
        case 'create':
          this.createQuiz(item);
          break;
        default:
          break;
      }
    } catch (error) {
      console.log(error);
    } finally {
      this.clearModalData();
    }
  }

  clearModalData() {
    this.selectAction = null;
    this.selectedTopics = [];
  }

}
