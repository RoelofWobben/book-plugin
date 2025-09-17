import { __ } from '@wordpress/i18n';
import { useBlockProps, InspectorControls } from '@wordpress/block-editor';
import { useSelect } from '@wordpress/data';
import { Panel, PanelBody, ToggleControl } from '@wordpress/components';
import { store as coreDataStore } from '@wordpress/core-data';
import BookList from './components/BookList';
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

            <InspectorControls key="setting">
                <Panel>
                    <PanelBody title="My Reading List Settings">
                        <ToggleControl
                            label="Toggle Image"
                            checked={showImage}
                            onChange={(newValue) => {
                                setAttributes({ showImage: newValue });
                            }}
                        />
                        <ToggleControl
                            label="Toggle Content"
                            checked={showContent}
                            onChange={(newValue) => {
                                setAttributes({ showContent: newValue });
                            }}
                        />
                    </PanelBody>
                </Panel>
            </InspectorControls>

            <p>{__('My Reading List – hello from the editor!', 'my-reading-list')}</p>
            <BookList books={books} attributes={attributes} />
        </div>
    );
}