import { useTranslation } from "react-i18next";

export default function useTranslate(prefix = '') {
    const { t } = useTranslation();

    const translate = (key) => t(prefix + key)

    return translate;
}