import { __ } from '@wordpress/i18n';
import { useBlockProps, InspectorControls } from '@wordpress/block-editor';
import { useSelect } from '@wordpress/data';

import { store as coreDataStore } from '@wordpress/core-data';
import BookList from './components/BookList';
import BlockControls from './components/BlockControl';
import './editor.scss';

export default function Edit({ attributes, setAttributes }) {

    const { showContent, showImage } = attributes;

    const books = useSelect(
        select =>
            select(coreDataStore).getEntityRecords('postType', 'book'),
        []
    );

    return (
        <div {...useBlockProps()}>

            <BlockControls attributes={ attributes } setAttributes={ setAttributes } />

            <p>{__('My Reading List – hello from the editor!', 'my-reading-list')}</p>
            <BookList books={books} attributes={attributes} />
        </div>
    );
}