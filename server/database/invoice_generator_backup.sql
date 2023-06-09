PGDMP                  
        {            invoice_generator    15.2    15.2                0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false                       0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false                       0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false                       1262    82041    invoice_generator    DATABASE     �   CREATE DATABASE invoice_generator WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'Russian_Russia.1251';
 !   DROP DATABASE invoice_generator;
                postgres    false            �            1259    98515    SequelizeMeta    TABLE     R   CREATE TABLE public."SequelizeMeta" (
    name character varying(255) NOT NULL
);
 #   DROP TABLE public."SequelizeMeta";
       public         heap    postgres    false            �            1259    98521    invoices    TABLE     Y  CREATE TABLE public.invoices (
    id integer NOT NULL,
    email character varying(255) NOT NULL,
    "firstName" character varying(255) NOT NULL,
    "lastName" character varying(255) NOT NULL,
    company character varying(255) NOT NULL,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);
    DROP TABLE public.invoices;
       public         heap    postgres    false            �            1259    98520    invoices_id_seq    SEQUENCE     �   CREATE SEQUENCE public.invoices_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 &   DROP SEQUENCE public.invoices_id_seq;
       public          postgres    false    216                       0    0    invoices_id_seq    SEQUENCE OWNED BY     C   ALTER SEQUENCE public.invoices_id_seq OWNED BY public.invoices.id;
          public          postgres    false    215            �            1259    98530    logs    TABLE     �   CREATE TABLE public.logs (
    id integer NOT NULL,
    email character varying(255) NOT NULL,
    date timestamp with time zone NOT NULL,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);
    DROP TABLE public.logs;
       public         heap    postgres    false            �            1259    98529    logs_id_seq    SEQUENCE     �   CREATE SEQUENCE public.logs_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 "   DROP SEQUENCE public.logs_id_seq;
       public          postgres    false    218                       0    0    logs_id_seq    SEQUENCE OWNED BY     ;   ALTER SEQUENCE public.logs_id_seq OWNED BY public.logs.id;
          public          postgres    false    217            �            1259    98537    works    TABLE       CREATE TABLE public.works (
    id integer NOT NULL,
    "nameWork" character varying(255) NOT NULL,
    "priceWork" real NOT NULL,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL,
    "InvoiceId" integer
);
    DROP TABLE public.works;
       public         heap    postgres    false            �            1259    98536    works_id_seq    SEQUENCE     �   CREATE SEQUENCE public.works_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 #   DROP SEQUENCE public.works_id_seq;
       public          postgres    false    220                       0    0    works_id_seq    SEQUENCE OWNED BY     =   ALTER SEQUENCE public.works_id_seq OWNED BY public.works.id;
          public          postgres    false    219            s           2604    98524    invoices id    DEFAULT     j   ALTER TABLE ONLY public.invoices ALTER COLUMN id SET DEFAULT nextval('public.invoices_id_seq'::regclass);
 :   ALTER TABLE public.invoices ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    216    215    216            t           2604    98533    logs id    DEFAULT     b   ALTER TABLE ONLY public.logs ALTER COLUMN id SET DEFAULT nextval('public.logs_id_seq'::regclass);
 6   ALTER TABLE public.logs ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    218    217    218            u           2604    98540    works id    DEFAULT     d   ALTER TABLE ONLY public.works ALTER COLUMN id SET DEFAULT nextval('public.works_id_seq'::regclass);
 7   ALTER TABLE public.works ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    220    219    220                      0    98515    SequelizeMeta 
   TABLE DATA           /   COPY public."SequelizeMeta" (name) FROM stdin;
    public          postgres    false    214   m                 0    98521    invoices 
   TABLE DATA           i   COPY public.invoices (id, email, "firstName", "lastName", company, "createdAt", "updatedAt") FROM stdin;
    public          postgres    false    216   �                 0    98530    logs 
   TABLE DATA           I   COPY public.logs (id, email, date, "createdAt", "updatedAt") FROM stdin;
    public          postgres    false    218   4                  0    98537    works 
   TABLE DATA           c   COPY public.works (id, "nameWork", "priceWork", "createdAt", "updatedAt", "InvoiceId") FROM stdin;
    public          postgres    false    220   �                   0    0    invoices_id_seq    SEQUENCE SET     >   SELECT pg_catalog.setval('public.invoices_id_seq', 1, false);
          public          postgres    false    215                       0    0    logs_id_seq    SEQUENCE SET     9   SELECT pg_catalog.setval('public.logs_id_seq', 1, true);
          public          postgres    false    217                       0    0    works_id_seq    SEQUENCE SET     ;   SELECT pg_catalog.setval('public.works_id_seq', 30, true);
          public          postgres    false    219            w           2606    98519     SequelizeMeta SequelizeMeta_pkey 
   CONSTRAINT     d   ALTER TABLE ONLY public."SequelizeMeta"
    ADD CONSTRAINT "SequelizeMeta_pkey" PRIMARY KEY (name);
 N   ALTER TABLE ONLY public."SequelizeMeta" DROP CONSTRAINT "SequelizeMeta_pkey";
       public            postgres    false    214            y           2606    98528    invoices invoices_pkey 
   CONSTRAINT     T   ALTER TABLE ONLY public.invoices
    ADD CONSTRAINT invoices_pkey PRIMARY KEY (id);
 @   ALTER TABLE ONLY public.invoices DROP CONSTRAINT invoices_pkey;
       public            postgres    false    216            {           2606    98535    logs logs_pkey 
   CONSTRAINT     L   ALTER TABLE ONLY public.logs
    ADD CONSTRAINT logs_pkey PRIMARY KEY (id);
 8   ALTER TABLE ONLY public.logs DROP CONSTRAINT logs_pkey;
       public            postgres    false    218            }           2606    98542    works works_pkey 
   CONSTRAINT     N   ALTER TABLE ONLY public.works
    ADD CONSTRAINT works_pkey PRIMARY KEY (id);
 :   ALTER TABLE ONLY public.works DROP CONSTRAINT works_pkey;
       public            postgres    false    220            ~           2606    98543    works works_InvoiceId_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.works
    ADD CONSTRAINT "works_InvoiceId_fkey" FOREIGN KEY ("InvoiceId") REFERENCES public.invoices(id);
 F   ALTER TABLE ONLY public.works DROP CONSTRAINT "works_InvoiceId_fkey";
       public          postgres    false    220    3193    216               F   x�320260102�4�4��M.JM,I���+��LN��*�2�*04043�+��O/F�5�˖�e�dc���� 4`         a   x�3�,�OOO-2600pH�M���K���t��L�+�t�H�-�I���/�+VH�KQ���/K-�4202�50�54P04�26�25�316�60�#����� ��8         D   x�3�,�OOO-2600pH�M���K���4202�50�54P04�25�2��332�60�!e�_�+F��� ��+         �  x����n� E���WEc��Dꢛn�Ċ�$�����i�
�C+K9�G<�:��n��J?��dz�f0Z�m�$��bo��}~L�i���iE����s�Х�f�m^�q�^�Ǵ���U��Z��o��z��u�N�����2=���@J-��Ӑ���v��񌦸�^:���O{a�^�q9}���\���FJ�;ݺ�(��+�!��B��C���[��;�������@��Fd��Xf�?�PwCF�
C�}J�[T#�鈹L	�jZ�&o5A[Y���> 46)Ĕ�=Bce�L;�F��9Eh.�R��;���2�,9)Bme�b�����U1F���k[e�K�5%�-k��Xj�)B_U�|��f5E���U�����(핏��Z]\km�� ��,5V)BsY�|�'^�;���^�,U����W>�Ʀ?}J{b�#u�H�����:�     