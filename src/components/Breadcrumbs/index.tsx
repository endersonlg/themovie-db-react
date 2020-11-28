import React from 'react';
import { Breadcrumb } from 'antd';
import { Link } from 'react-router-dom';
import { BreadcrumbProps } from 'antd/lib/breadcrumb';

const { Item } = Breadcrumb;

type Props = BreadcrumbProps & {
    paths: {
        label?: string;
        link?: string;
    }[];
};

const Breadcrumbs: React.FC<Props> = (props) => {
    const { paths, ...innerProps } = props;

    return (
        <Breadcrumb {...innerProps}>
            {paths.map((path, key) => (
                <Item key={`${key}_breadcrumbs_${path.label}`}>
                    {(path.link && <Link to={path.link}>{path.label}</Link>) ||
                        path.label}
                </Item>
            ))}
        </Breadcrumb>
    );
};

export default Breadcrumbs;
