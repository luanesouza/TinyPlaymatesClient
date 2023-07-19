import { ChangeEvent, FormEvent, useState } from 'react';
import Input from '../input';
import { postProfileImage } from '../../utils/api';

export default function Upload() {
	const [fileInputState, setFileInputState] = useState<File>();
	const [previewSource, setPreviewSource] = useState<
		string | ArrayBuffer | null
	>('');

	const handleFileInputChange = (
		e: ChangeEvent<HTMLInputElement> | undefined
	) => {
		const file = e?.target?.files?.[0];
		if (typeof file !== null && typeof file !== 'undefined') {
			setFileInputState(file);
			previewFile(file);
		}
	};

	const previewFile = (file: File) => {
		const reader = new FileReader();
		reader.readAsDataURL(file);
		reader.onloadend = () => {
			setPreviewSource(reader.result);
		};
	};

	const handleSubmitFile = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (!fileInputState) return;
		uploadImage(fileInputState);
	};

	const uploadImage = (base64EncodedImage: File | ArrayBuffer | null) => {
		if (typeof base64EncodedImage !== 'undefined') {
			postProfileImage(1, base64EncodedImage);
		}
	};

	return (
		<div>
			<h2>Upload</h2>
			<form onSubmit={handleSubmitFile}>
				<Input name='image' type='file' onChange={handleFileInputChange} />
				<button type='submit'> Submit </button>
			</form>
			{previewSource ? <img src={`${previewSource}`} alt='preview' /> : ''}
		</div>
	);
}
