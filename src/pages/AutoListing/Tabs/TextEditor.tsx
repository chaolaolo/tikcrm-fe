import React, { useState } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import 'bootstrap/dist/css/bootstrap.min.css';

const ProductDescriptionForm: React.FC = () => {
    const [description, setDescription] = useState('');

    return (
        <div className="mb-2">
            <CKEditor
                editor={ClassicEditor as any}
                data={description}
                onReady={(editor) => {
                    // cao
                    // editor.ui.view.editable.element.style.height = '250px';
                    // // rộng
                    // editor.ui.view.editable.element.style.width = '100%';
                    const editableElement = editor.ui?.view?.editable?.element;
                    if (editableElement) {
                        editableElement.style.height = '250px';
                        editableElement.style.width = '100%';
                    }
                }}
                onChange={(_, editor) => {
                    const data = editor.getData();
                    setDescription(data);
                }}
            />
        </div>
    );
};

export default ProductDescriptionForm;
