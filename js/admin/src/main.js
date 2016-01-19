import { extend } from 'flarum/extend';
import app from 'flarum/app';
import PermissionGrid from 'flarum/components/PermissionGrid';

//import addImageUploadPane from 'flagrow/image-upload/addImageUploadPane'

app.initializers.add('flagrow-split', app => {
    //addSplitPane();

    extend(PermissionGrid.prototype, 'moderateItems', items => {
    items.add('splitDiscussion', {
      icon: 'code-fork',
      label: app.translator.trans('flagrow-split.admin.permissions.split_discussion_label'),
      permission: 'discussion.split'
    }, 65);
  });
});