<template>
  <div class='tinymce-container editor-container' style="width:100%;height:100%">
    <textarea class='tinymce-textarea' :id="id"></textarea>
  </div>
</template>

<script>
    export default {
      name: 'tinymce',
      props: {
        id: {
          type: String,
          default: 'tinymceEditor'
        },
        value: {
          type: String,
          default: ''
        },
        toolbar: {
          type: Array,
          required: false,
          default() {
            return ['undo redo | insert styleselect | bold italic fontsizeselect | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | table | fullscreen code']
          }
        },
        data() {
          return {
            hasChange: false,
            hasInit: false
          }
        },
        menubar: {
          default: ''
        },
        height: {
          type: Number,
          required: false,
          default: 460
        }
      },
      watch: {
        value(val) {
          if (!this.hasChange && this.hasInit) {
            this.$nextTick(() => tinymce.get(this.id).setContent(val))
          }
        }
      },
      mounted() {
        const _this = this;
        tinymce.init({
          selector: `#${this.id}`,
          height: $(".page_right_right_bottom").height() - 30,
          body_class: 'panel-body',
          language: 'zh_CN',
          language_url: '/static/tinymce/langs/zh_CN.js',
          toolbar: this.toolbar,
          menubar: this.menubar,
          plugins: [
				    'advlist autolink lists link image charmap print preview hr anchor pagebreak',
				    'searchreplace wordcount visualblocks visualchars code fullscreen',
				    'insertdatetime media nonbreaking save table contextmenu directionality',
				    'emoticons template paste textcolor colorpicker textpattern imagetools codesample toc help'
				  ],
          end_container_on_empty_block: true,
          powerpaste_word_import: 'clean',
          code_dialog_height: 450,
          code_dialog_width: 1000,
          advlist_bullet_styles: 'square',
          advlist_number_styles: 'default',
//        imagetools_cors_hosts: ['wpimg.wallstcn.com', 'wallstreetcn.com'],
//        imagetools_toolbar: 'watermark',
          image_advtab: true,
          default_link_target: '_blank',
          link_title: true,
          init_instance_callback: editor => {
            if (_this.value) {
              editor.setContent(_this.value)
            }
            _this.hasInit = true;
            editor.on('NodeChange Change KeyUp', () => {
              this.hasChange = true;
              this.$emit('input', editor.getContent({ format: 'raw' }));
            });
          },
          setup(editor) {
            editor.addButton('h2', {
              title: '小标题', // tooltip text seen on mouseover
              text: '小标题',
              onclick() {
                editor.execCommand('mceToggleFormat', false, 'h2');
              },
              onPostRender() {
                const btn = this;
                editor.on('init', () => {
                  editor.formatter.formatChanged('h2', state => {
                    btn.active(state);
                  });
                });
              }
            });
            editor.addButton('p', {
              title: '正文',
              text: '正文',
              onclick() {
                editor.execCommand('mceToggleFormat', false, 'p');
              },
              onPostRender() {
                const btn = this;
                editor.on('init', () => {
                  editor.formatter.formatChanged('p', state => {
                    btn.active(state);
                  });
                });
              }
            });
          }
        });
      },
      destroyed() {
        tinymce.get(this.id).destroy();
      }
}
</script>

<style scoped>
.mce-tinymce{
	border:0px !important;
}
.tinymce-container {
  position: relative
}

.tinymce-textarea {
  visibility: hidden;
  z-index: -1;
}

.editor-custom-btn-container {
  position: absolute;
  right: 15px;
  top: 18px;
}

.editor-upload-btn {
  display: inline-block;
}
</style>
