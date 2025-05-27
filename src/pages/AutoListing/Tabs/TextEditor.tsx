import React, { useState } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import 'bootstrap/dist/css/bootstrap.min.css';

const ProductDescriptionForm: React.FC = () => {
    const [description, setDescription] = useState('');

    return (
        <div className="mb-2">
            <CKEditor
                editor={ClassicEditor}
                data={description}
                onReady={(editor) => {
                    // cao
                    editor.ui.view.editable.element.style.height = '250px';
                    // rộng
                    editor.ui.view.editable.element.style.width = '100%';
                }}
                onChange={(event, editor) => {
                    const data = editor.getData();
                    setDescription(data);
                }}
            />
        </div>
    );
};

export default ProductDescriptionForm;
