import { Component } from '@angular/core';
import { ReactiveFormsModule, FormControl, FormGroup, FormsModule } from '@angular/forms';
import { NgxEditorModule, Validators, Editor, Toolbar } from 'ngx-editor';
import jsonDoc from '../../../shared/data/editor';
import { AngularEditorModule,AngularEditorConfig } from '@wfpena/angular-wysiwyg';
import { SharedModule } from '../../../shared/sharedmodule';

@Component({
  selector: 'app-form-editor',
  standalone:true,
  imports: [
    SharedModule,
    NgxEditorModule,
    FormsModule,
    ReactiveFormsModule,
    AngularEditorModule
],
  templateUrl: './form-editor.component.html',
  styleUrl: './form-editor.component.scss'
})
export class FormEditorComponent {
  editordoc = jsonDoc;
  editor!: Editor;
  toolbar: Toolbar = [
    ['bold', 'italic'],
    ['underline', 'strike'],
    ['code', 'blockquote'],
    ['ordered_list', 'bullet_list'],
    [{ heading: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'] }],
    ['link', 'image'],
    ['text_color', 'background_color'],
    ['align_left', 'align_center', 'align_right', 'align_justify'],
  ];

  form = new FormGroup({
    editorContent: new FormControl(
      { value: jsonDoc, disabled: false },
      Validators.required()
    ),
  });

  

  ngOnInit(): void {
    this.editor = new Editor();
  }

  ngOnDestroy(): void {
    this.editor.destroy();
  }
  // Angular Editor
  htmlContent = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores, laudantium! Praesentium maiores minima officia dolor architecto officiis delectus dicta a vel, dolorem amet quos quae esse iste ab voluptate alias?.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores, laudantium! Praesentium maiores minima officia dolor architecto officiis delectus dicta a vel, dolorem amet quos quae esse iste ab voluptate alias?,Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores, laudantium! Praesentium maiores minima officia dolor architecto officiis delectus dicta a vel, dolorem amet quos quae esse iste ab voluptate alias?,Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores, laudantium! Praesentium maiores minima officia dolor architecto officiis delectus dicta a vel, dolorem amet quos quae esse iste ab voluptate alias?.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores, laudantium! Praesentium maiores minima officia dolor architecto officiis delectus dicta a vel, dolorem amet quos quae esse iste ab voluptate alias?.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores, laudantium! Praesentium maiores minima officia dolor architecto officiis delectus dicta a vel, dolorem amet quos quae esse iste ab voluptate alias?';

  config: AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    height: '15rem',
    minHeight: '5rem',
    placeholder: 'Enter text here...',
    translate: 'no',
    defaultParagraphSeparator: 'p',
    defaultFontName: 'Arial',

    customClasses: [
      {
        name: "quote",
        class: "quote",
      },
      {
        name: 'redText',
        class: 'redText'
      },
      {
        name: "titleText",
        class: "titleText",
        tag: "h1",
      },
    ]
  };
}

