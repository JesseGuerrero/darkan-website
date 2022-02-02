import React from 'react';
import { hydrate, render } from 'react-dom';
import Index from '../pages/index'

hydrate(<Index/>, document.getElementById('root')); //TODO render/hydrate depending on env