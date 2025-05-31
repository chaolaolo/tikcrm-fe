import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

declare module '@ckeditor/ckeditor5-react' {
  import { Editor } from '@ckeditor/ckeditor5-core';
  interface CKEditorProps {
    editor: typeof ClassicEditor;
    data?: string;
    onReady?: (editor: Editor) => void;
    onChange?: (event: Event, editor: Editor) => void;
    onBlur?: (event: Event, editor: Editor) => void;
    onFocus?: (event: Event, editor: Editor) => void;
  }
}
